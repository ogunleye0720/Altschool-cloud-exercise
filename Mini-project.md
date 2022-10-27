<h1> END OF SEMESTER MINI-PROJECT </h1>
<h2> HOSTING A REAL WORLD LARAVEL PROJECT </h2>

<h3> SETUP PACKAGES REQUIRED FOR THIS PROJECT :</h3>

<ul>
  <li>
    DEBIAN 11 RUNNING ON REMOTE MACHINE (DIGITAL OCEAN)
  </li>
  <li>
    LARAVEL-APACHE
  </li>
  <li>
    MYSQL DATABASE
  </li>
  <li>
    PHP 8.1
  </li>
  <li>
    git, wget, curl
  </li>
  <li>
    COMPOSER
  </li>
  
</ul>

<p> The steps taken to host the laravel application are explained as follows: </p>

<ol>
  <li>CREATING A DOMAIN NAME ON NAMECHEAP: Name Cheap offered a promocode to students, especially those with access to the github student pack. The promo code was used to redeem a free domain name "ogunleye1995.me"</li>
  <li>A digital ocean droplet was created via public ssh key generated from my local machine and mapped to the domain name gottten from Namecheap</li>
  <li>An IP address was generated from digital ocean, and mapped to the domain name. A Debian linux operating system was created on the remote machine </li>
  <li>inside the console of the remote machine the following commands were entered: </li>
    <h3> Updating && Upgrading the apt package installer </h3>
    <p> The following command below was entered: </p>
    
``` bash
    server# apt update && apt upgrade
```
  
  <h3> Installing wget and curl </h3>
  
``` bash
  server# apt install wget
```

``` bash
  server# apt install curl
```
  
  <h3> setting timezone </h3>
  
``` bash
  server# sudo timedatectl set-timezone Africa/Lagos
```
  <h3> installing Apache2 </h3>
 
``` bash
  server# sudo apt install apache2
```
  
  <h3> Installing Firewall (UFW) </h3>
  
``` bash
  server# sudo apt install ufw
```
 <p> Now we can set-up an uncomplicated firewall,by allowing SSH, OpenSSH, and "WWW Full" </p>
  <h3> Confirmation of Apache2 Server </h3>

 ``` bash
  server# sudo systemctl status apache2
```
  <p> The output of the command ia shown below: </p>
  
``` bash
  Output
● apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
   Drop-In: /lib/systemd/system/apache2.service.d
            └─apache2-systemd.conf
    Active: active (running) since Tue 2022-10-25 10:29:51 UTC; 5min ago
  Main PID: 10617 (apache2)
     Tasks: 55 (limit: 667)
    CGroup: /system.slice/apache2.service
            ├─10617 /usr/sbin/apache2 -k start
            ├─10619 /usr/sbin/apache2 -k start
            └─10620 /usr/sbin/apache2 -k start
 Oct 25 10:29:51 apache systemd[1]: Starting The Apache HTTP Server…
 Oct 25 10:29:51 apache systemd[1]: Started The Apache HTTP Server.
```
  
  <h3> Intalling mysql </h3>
  
  <p> The Release package was installed with command below: </p>
  
``` bash
  wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb
```
  <p> Installing mysql versioon 8.0 </p>
  
``` bash
  sudo apt install ./mysql-apt-config_0.8.22-1_all.deb
```
  
  
``` bash  
 sudo apt update
 sudo apt install mysql-server
```
  
  <p> Securing mysql </p>
  
  
``` bash
  mysql_secure_installation
```
  
 <h3> Intalling PHP 8.1 </h3>
  
``` bash
sudo apt -y install lsb-release apt-transport-https ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
```
  <p> Adding PPA to the server packages </p>
  
``` bash
  echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list
```
  <p> Updating packages and Installing PHP8.1 </p>
  
``` bash
sudo apt update && upgrade

sudo apt install php libapache2-mod-php php8.1-mysql php8.1-common php8.1-mysql php8.1-xml php8.1-xmlrpc php8.1-curl php8.1-gd php8.1-imagick php8.1-cli php8.1-dev php8.1-imap php8.1-mbstring php8.1-opcache php8.1-soap php8.1-zip php8.1-intl -y
```
  
  <p> The php version is confirmed using the command below: </p>
  
``` bash
 php -v
```
  <p> PHP configuration </p>
  
``` bash
sudo nano /etc/php/8.1/apache2/php.ini
```
  
  <p> The file is opened and edited fpr better performance</p>
  
``` bash
upload_max_filesize = 32M 
post_max_size = 128M 
memory_limit = 256M 
max_execution_time = 300 
max_input_vars = 3000 
max_input_time = 5000
```
  
  <p> Configure Apache and disable Default </p>
  
``` bash
  sudo a2dissite 000-default
```
  
``` bash
sudo chmod -R 755 /var/www/html/ogunleye
sudo chown -R www-data:www-data /var/www/html/ogunleye
```
  
  
``` bash
  sudo nano /etc/apache2/sites-available/0gunleye.conf
  
```
  
  <h2> Setting up virtual host configuration </h2>
  
  
 ``` bash
 <VirtualHost *:80>
     ServerAdmin support@ogunleye1995.me
     ServerName ogunleye1995.me
     ServerAlias www.ogunlye1995.me

     DocumentRoot /var/www/ogunleye

     <Directory /var/www/ogunleye>
         Options Indexes FollowSymLinks
         AllowOverride All
         Require all granted
     </Directory>

     ErrorLog ${APACHE_LOG_DIR}/error.log 
     CustomLog ${APACHE_LOG_DIR}/access.log combined 
 </VirtualHost>
 ```
  
 ``` bash
  /var/www/ogunleye #cp .env.example .env
  ```
  
  <p>Create Database : <p>

``` bash
  # sudo nano .env
```
  <p> The .env file was edited as shown below :</p>
  
``` bash
APP_ENV=local
APP_DEBUG=true
APP_KEY=
APP_URL=http://ogunleye1995.me
APP_PORT = 3000

DB_CONNECTON = mysql
DB_HOST=localhost
DB_PORT = 3306
DB_DATABASE=ogunleye
DB_USERNAME=ogunleye
DB_PASSWORD=**********

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

REDIS_HOST=localhost
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=googlemail.com
MAIL_PORT=465
MAIL_USERNAME=XXXXXXXXXXX
MAIL_PASSWORD=XXXXXXXXXXX
MAIL_ENCRYPTION=null
```
  
``` bash
  mysql -u root -p
```
  
``` bash
  mysql > CREATE DATABASE ogunleye;
  mysql > CREATE USER 'ogunleye'@'localhost' IDENTIFIED BY 'pass_word';
  mysql > GRAND ALL ON ogunleye.* TO 'ogunleye'@localhost';
  mysql > FLUSH PRIVILEGES;
```
  <p>Installing Module Rewrite : </p>
  
``` bash
  var/www/ogunleye# a2enmode rewrite
```  
  <p> Then System restart apache2 </p>
  
``` bash
  systemctl restart apache2
```
  
  <p> Adding htaccess: </p>
  
``` bash
  /var/www/ogunleye# nano .htaccess
```
  <p> The file is opened and edited as shown below: </p>
  
``` bash
<IfModule mod_rewrite.c>
RewriteEngine On 
    
RewriteCond %{REQUEST_URI} !^/public/ 
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
    
RewriteRule ^(.*)$ /public/$1 
RewriteRule ^(/)?$ public/index.php [L] 
</IfModule>
```
  <p> Configuring the Laravel ROUTING </P>
  
``` bash
sudo nano routes/web.php
```

``` bash
Route::get ('/', function () {
   return view('welcome');});
```
<p> Migrating the DB (migrate db) </p>


``` bash
var/www/ogunleye# composer install
```

``` bash
var/www/ogunleye# apt install unzip
```

``` bash
var/www/ogunleye# composer update
```

``` bash
var/www/ogunleye# composer create-project
```

``` bash
var/www/ogunleye# php artisan migrate --seed
```

``` bash
var/www/ogunleye# sudo a2ensite ogunleye
```

``` bash
var/www/ogunleye# systemctl reload apache2
```

<p> Opening ogunleye1995.me on the chrome browser,the result is shown in the image below : </p>
<p></p>
</ol>

