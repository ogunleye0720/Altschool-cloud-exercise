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
</ol>
