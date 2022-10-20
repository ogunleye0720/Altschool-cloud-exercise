<h1> SHELL SCRIPT TO DISPLAY SYSTEM DAILY MEMORY USAGE </h1>

<p> This project is a bash script that displays the system memory usage (RAM) every hour, every mid-night, everyweek and everymonth of the year. The ouput is displayed in a log file,and sent to a specified email address using crontab</p>
  
<p> The Linux server was setup to Gmail SMTP MAIL using POSTFIX. POSTFIX enables sending of email from a gmail account</p>
<p> mailx, which is a console application used for sending and receiving emails was installed, also SSMTP (Mail Transfer Protocol) was also installed into the linux system</p>
  
<p>The shell script was created and the commands to log the RAM usage information into a specified file was entered, as shown in the image below</p>
<p><img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/ALT-SHELL-SCRIPT-ASSNMNT.JPG" height="10%" width="40%" /><p>

<p>The crontab was installed and edited to run the task specified in the path as shown in the image below</p>
<p><img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/crontab-daily-memory-usage.JPG" height="10%" width="40%" /><p>
