<h1> USING ANSIBLE PLAYBOOK TO SET UP APACHE AND HOST A PHP FILE</h1>

<p> The aim of this project is to create an Ansible Playbook to set up a server with Apache. The server is used to host an index.php file, with Timezone set to AFRICA/LAGOS</p>

<h2> The process of Installing Ansible </h2>
<p> The following commands were ensured while installing Ansible Playbook : </p>

``` bash
$ sudo apt update && apt upgrade
$ sudo apt-get install python3.8
$ sudo apt install -y ansible
$ ansible --version

```

<br>

## SSH KEY PAIR GENERATIOM
``` bash
$ cd .ssh
~/.ssh$ ssh-keygen
~/.ssh$ cat id_rsa.pub

```
<p>The public key was generated with the commands as shown above.The public key would be used to IP on a cloud provider,in this project Digital Ocean was used <br>
	below are the steps used to create an IP on Digital Ocean:
<ul>	
 <li> A new project was created on digital ocean </li>
 <li> inside the project,a new Droplet was created, The prefered Data Center(LONDON) was chosen for this project </li>
 <li> Ubuntu 20.04 was the selected image type </li>
 <li> A shared CPU (BASIC) was selected for this project </li>
 <li> Regular with SSD was the CPU option selected </li>
 <li> The public ssh key generated from the local linux system was pasted in the Authentication Method </li>
 <li> The droplet was created and a host ip address was generated </li>
</ul>
</p> 
<br>

## SAVING THE GENERATED IP ADDRESS INSIDE THE /etc/hosts file
<br>

``` bash
$ sudo nano /etc/hosts

```
<br>
<h2> ANSIBLE PLAYBOOK INSTALLATION </h2>
<br>
<p> Then the following commands as shown below were entered into setup.yml file </p>
<p><img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/playbookcontent1.JPG" height="20%" width="60%" /></p>
<p><img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/playbookcontent2.JPG" height="20%" width="60%" /></p>

<h2> EXECUTION OF PLAYBOOK </h2>
<p>The following command was entered to test the setup.yml playbook for syntax error before executing it.</p>

<br>
<br>

``` bash
$ ansible-playbook setup.yml --check
$ ansible-playbook setup.yml 
```
<br>
<br>

<p> An index.php file created and the following information was entered </p>

<br>
<br>

``` bash
$ touch index.php
$ sudo nano index.php
```
<br>
<br>
<p> The following information in the picture below was entered </p>
<p><img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/indexphp.JPG" height="20%" width="60%" /></p>

