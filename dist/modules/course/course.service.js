"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const fs = tslib_1.__importStar(require("fs"));
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const course_entity_1 = require("../../entities/course.entity");
const user_entity_1 = require("../../entities/user.entity");
const courseContent_entity_1 = require("../../entities/courseContent.entity");
const util_1 = require("util");
const user_constant_1 = require("../user/user.constant");
const crypto_1 = require("crypto");
const fileChest_entity_1 = require("../../entities/fileChest.entity");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let CourseService = class CourseService extends crud_1.CRUDService {
    constructor(config, repo, repoUser, repoCourseContent, repoFileChest) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoUser = repoUser;
        this.repoCourseContent = repoCourseContent;
        this.repoFileChest = repoFileChest;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.courseFilePath);
    }
    async ensureDirectoryExists(directoryPath) {
        try {
            await mkdirAsync(directoryPath, { recursive: true });
        }
        catch (error) {
            throw new Error('Error creating directory');
        }
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async validateDTO(dto) {
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            const constraints = {};
            errors.forEach((error) => {
                if (error.constraints) {
                    Object.assign(constraints, error.constraints);
                }
            });
            throw new common_1.BadRequestException(constraints);
        }
        return errors.length === 0;
    }
    async findUserWithCourses(userUuid) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['courses', 'academy.fileChest', 'academy'],
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        return user;
    }
    checkUnreleasedCoursesLimit(user) {
        const unreleasedCoursesCount = user.courses.filter((course) => !course.released).length;
        if (unreleasedCoursesCount >= 3) {
            throw new common_1.BadRequestException('You cannot create more than three unreleased courses.');
        }
    }
    async createInfoStep(userUuid, courseUuid, dto, stepField) {
        try {
            const user = await this.findUserWithCourses(userUuid);
            const course = user.courses.find((c) => c.uuid === courseUuid);
            if (!course) {
                throw new common_1.BadRequestException(`Course not found for the user`);
            }
            console.log('dto', dto);
            const result = await this.validateDTO(dto);
            console.log('result', result);
            course.steps = course.steps || {};
            for (const key of Object.keys(dto)) {
                if (!Array.isArray(course[key])) {
                    course[key] = [];
                }
                if (key in course) {
                    course[key] = dto[key];
                }
            }
            await this.repo.update(course.uuid, dto);
            const anyFieldNull = Object.values(dto).some((value) => value === null);
            if (anyFieldNull) {
                course.steps[stepField] = course_entity_1.Steps.Ongoing;
            }
            else {
                course.steps[stepField] = course_entity_1.Steps.Completed;
            }
            console.log('steps', course.steps[stepField]);
            console.log('course', course);
            await this.repo.save(course);
            return course;
        }
        catch (error) {
            console.error('An error occurred:', error);
            throw new common_1.BadRequestException('An error occurred while processing the request');
        }
    }
    async areAllStepsCompleted(courseUuid) {
        const course = await this.repo.findOne({
            where: { uuid: courseUuid },
        });
        if (!course) {
            throw new common_1.BadRequestException('Course not found');
        }
        const { steps } = course;
        return (steps.subject === course_entity_1.Steps.Completed &&
            steps.audiences === course_entity_1.Steps.Completed &&
            steps.topicsAndSessions === course_entity_1.Steps.Completed &&
            steps.landingPage === course_entity_1.Steps.Completed &&
            steps.price === course_entity_1.Steps.Completed &&
            steps.messages === course_entity_1.Steps.Completed);
    }
    async getAllTicketings(userUuid, page, _search, _sort, _filter) {
        const user = await this.findUserWithCourses(userUuid);
        if (!user.courses) {
            throw new common_1.BadRequestException(`There is no course for this user`);
        }
        const per_page = 20;
        page = page || 1;
        let courses = user.courses || [];
        const total = courses.length;
        courses = courses.slice((page - 1) * per_page, page * per_page);
        return { data: courses, total };
    }
    async getCourse(uuid) {
        const course = await this.repo.findOne({
            where: { uuid },
        });
        if (!course) {
            throw new common_1.BadRequestException('Course not found');
        }
        return course;
    }
    async getFileChest(uuid) {
        var _a;
        const user = await this.findUserWithCourses(uuid);
        if (!((_a = user.academy) === null || _a === void 0 ? void 0 : _a.fileChest)) {
            throw new common_1.BadRequestException(`There is no file chest`);
        }
        const fileChest = await this.repoFileChest.findOne({
            where: { uuid: user.academy.fileChest.uuid },
        });
        if (!fileChest) {
            throw new common_1.BadRequestException('FileChest not found');
        }
        return fileChest;
    }
    async getFileChestContent(uuid) {
        var _a;
        const user = await this.findUserWithCourses(uuid);
        if (!((_a = user.academy) === null || _a === void 0 ? void 0 : _a.fileChest)) {
            throw new common_1.BadRequestException(`There is no file chest`);
        }
        const fileChestContent = await this.repoFileChest.findOne({
            where: { uuid: user.academy.fileChest.uuid },
            relations: ['courseContent'],
        });
        if (!fileChestContent) {
            throw new common_1.BadRequestException('FileChest content not found');
        }
        return fileChestContent;
    }
    async createCourse(userUuid) {
        const user = await this.findUserWithCourses(userUuid);
        this.checkUnreleasedCoursesLimit(user);
        const course = new course_entity_1.Course();
        course.released = false;
        user.courses.push(course);
        const createdCourse = await this.repo.save(course);
        await this.repoUser.save(user);
        return createdCourse.uuid;
    }
    async createSubjectInfo(userUuid, courseUuid, dto) {
        return this.createInfoStep(userUuid, courseUuid, dto, 'subject');
    }
    async createAudienceInfo(userUuid, courseUuid, dto) {
        return this.createInfoStep(userUuid, courseUuid, dto, 'audiences');
    }
    async createTopicsAndSessionsInfo(userUuid, courseUuid, dto) {
        return this.createInfoStep(userUuid, courseUuid, dto, 'topicsAndSessions');
    }
    async createLandingPageInfo(userUuid, courseUuid, dto) {
        return this.createInfoStep(userUuid, courseUuid, dto, 'landingPage');
    }
    async createPriceInfo(userUuid, courseUuid, dto) {
        const user = await this.findUserWithCourses(userUuid);
        const course = user.courses.find((c) => c.uuid === courseUuid);
        if (!course) {
            throw new common_1.BadRequestException(`Course not found for the user`);
        }
        await this.validateDTO(dto);
        course.discountActivation = dto.discountActivation;
        course.basePrice = dto.basePrice;
        if (dto.discountActivation) {
            course.discountDueDate = dto.discountDueDate;
            course.discountPrice = dto.discountPrice;
        }
        else {
            course.discountDueDate = '';
            course.discountPrice = 0;
        }
        course.steps = course.steps || {};
        const allFieldsValid = Object.values(dto).every((value) => value !== null);
        if (allFieldsValid) {
            course.steps.price = course_entity_1.Steps.Completed;
        }
        else {
            course.steps.price = course_entity_1.Steps.Ongoing;
        }
        await this.repo.save(course);
        return course;
    }
    async createMessagesInfo(userUuid, courseUuid, dto) {
        return this.createInfoStep(userUuid, courseUuid, dto, 'messages');
    }
    async uploadTopicsFile(userUuid, file) {
        var _a;
        try {
            const user = await this.findUserWithCourses(userUuid);
            if (!((_a = user.academy) === null || _a === void 0 ? void 0 : _a.fileChest)) {
                throw new common_1.BadRequestException(`There is no file chest`);
            }
            const freeSpace = user.academy.fileChest.maxVolume - user.academy.fileChest.usedVolume;
            if (!file) {
                throw new common_1.BadRequestException(`There is no file`);
            }
            if (file.size > freeSpace) {
                throw new common_1.BadRequestException(`There is no free space`);
            }
            const fileExtension = file.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.courseFilePath}/${randomFileName}`;
            const courseContent = new courseContent_entity_1.CourseContent();
            courseContent.fileName = randomFileName;
            courseContent.filePath = `/course/file/${randomFileName}`;
            courseContent.fileOriginalName = file.originalname;
            courseContent.extension = fileExtension || '';
            courseContent.size = file.size || 0;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(file.buffer);
            fileStream.end();
            courseContent.fileChest = user.academy.fileChest;
            user.academy.fileChest.usedVolume += file.size;
            await this.repoCourseContent.save(courseContent);
            await this.repoFileChest.save(user.academy.fileChest);
            return courseContent;
        }
        catch (error) {
            console.error('An error occurred:', error);
            throw new common_1.BadRequestException('An error occurred while processing the request');
        }
    }
    async uploadCoverPic(userUuid, courseUuid, picName) {
        const user = await this.findUserWithCourses(userUuid);
        const course = user.courses.find((c) => c.uuid === courseUuid);
        if (!course) {
            throw new common_1.BadRequestException(`Course not found for the user`);
        }
        if (picName) {
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.courseFilePath}/${randomFileName}`;
            course.coverPicName = randomFileName;
            course.coverPicPath = `/course/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
            await this.repo.save(course);
            return course;
        }
        return null;
    }
    async uploadAdvVideo(userUuid, courseUuid, fileName) {
        const user = await this.findUserWithCourses(userUuid);
        const course = user.courses.find((c) => c.uuid === courseUuid);
        if (!course) {
            throw new common_1.BadRequestException(`Course not found for the user`);
        }
        if (fileName) {
            const fileExtension = fileName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.courseFilePath}/${randomFileName}`;
            course.advVideoName = randomFileName;
            course.advVideoPath = `/course/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(fileName.buffer);
            fileStream.end();
            await this.repo.save(course);
            return course;
        }
        return null;
    }
    async releaseCourse(userUuid, courseUuid) {
        const user = await this.findUserWithCourses(userUuid);
        const course = user.courses.find((c) => c.uuid === courseUuid);
        if (!course) {
            throw new common_1.BadRequestException(`Course not found for the user`);
        }
        course.released = true;
        await this.repo.save(course);
        return course;
    }
};
CourseService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(course_entity_1.Course)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(courseContent_entity_1.CourseContent)),
    tslib_1.__param(4, (0, typeorm_2.InjectRepository)(fileChest_entity_1.FileChest)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CourseService);
exports.CourseService = CourseService;
