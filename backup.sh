//backup all db

sudo mysqldump -u root -p gozinesh > backup_$(date +"%Y%m%d_%H%M%S").sql


//backup

mysqldump -u root -p gozinesh user user_roles user_information schedule > backup.sql


//restore

mysql -u root -p gozinesh < backup.sql





mysqldump -u root -p gozinesh user user_information user_roles schedule --where="nationalCode='2754816291'" > backup-2754816291.sql



mysql -u root -p gozinesh < backup-2754816291.sql