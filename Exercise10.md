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
<br>

## SSH KEY PAIR GENERATIOM
``` bash
$ cd .ssh
~/.ssh$ ssh-keygen
~/.ssh$ cat id_rsa.pub

```
<p>The public key was generated with the commands as shown above.The public key would be used to IP on a cloud provider,in this project Digital Ocean was used <br>
	below are the steps used to create an IP on Digital Ocean:
- A new project was created on digital ocean
- inside the project,a new Droplet was created, The prefered Data Center(LONDON) was chosen for this project
- Ubuntu 20.04 was the selected image type
- A shared CPU (BASIC) was selected for this project
- Regular with SSD was the CPU option selected
- The public ssh key generated from the local linux system was pasted in the Authentication Method
- The droplet was created and a host ip address was generated
</p> 
<br>
<br>

## SAVING THE GENERATED IP ADDRESS INSIDE THE /etc/hosts file
``` bash
$ sudo nano /etc/hosts

#the ip was stored inside the file
[webservers]
generated ip

```
<h2> ANSIBLE PLAYBOOK INSTALLATION </P>
