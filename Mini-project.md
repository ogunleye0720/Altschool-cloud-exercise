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
  
  
</ol>
