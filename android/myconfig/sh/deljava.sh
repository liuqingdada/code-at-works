
sudo update-alternatives --remove  jar /home/jason/jdk1.6.0_43/bin/jar 
sudo update-alternatives --remove  jarsigner /home/jason/jdk1.6.0_43/bin/jarsigner 
sudo update-alternatives --remove  java /home/jason/jdk1.6.0_43/bin/java 
sudo update-alternatives --remove  javac /home/jason/jdk1.6.0_43/bin/javac 
sudo update-alternatives --remove  javadoc /home/jason/jdk1.6.0_43/bin/javadoc 
sudo update-alternatives --remove  javah /home/jason/jdk1.6.0_43/bin/javah 
sudo update-alternatives --remove  javaws /home/jason/jdk1.6.0_43/bin/javaws 
sudo update-alternatives --remove  javap /home/jason/jdk1.6.0_43/bin/javap 

sudo update-alternatives --remove  appletviewer /home/jason/jdk1.6.0_43/bin/appletviewer 
sudo update-alternatives --remove  extcheck /home/jason/jdk1.6.0_43/bin/extcheck 
sudo update-alternatives --remove  idlj /home/jason/jdk1.6.0_43/bin/idlj 
sudo update-alternatives --remove  jconsole /home/jason/jdk1.6.0_43/bin/jconsole 
sudo update-alternatives --remove  jdb /home/jason/jdk1.6.0_43/bin/jdb 
sudo update-alternatives --remove  jhat /home/jason/jdk1.6.0_43/bin/jhat 
sudo update-alternatives --remove  jmap /home/jason/jdk1.6.0_43/bin/jmap 
sudo update-alternatives --remove  jps /home/jason/jdk1.6.0_43/bin/jps 
sudo update-alternatives --remove  jrunscript /home/jason/jdk1.6.0_43/bin/jrunscript 
sudo update-alternatives --remove  jsadebugd /home/jason/jdk1.6.0_43/bin/jsadebugd 
sudo update-alternatives --remove  jstack /home/jason/jdk1.6.0_43/bin/jstack 
sudo update-alternatives --remove  jstat /home/jason/jdk1.6.0_43/bin/jstat 
sudo update-alternatives --remove  jstatd /home/jason/jdk1.6.0_43/bin/jstatd 
sudo update-alternatives --remove  keytool /home/jason/jdk1.6.0_43/bin/keytool 
sudo update-alternatives --remove  native2ascii /home/jason/jdk1.6.0_43/bin/native2ascii 
sudo update-alternatives --remove  orbd /home/jason/jdk1.6.0_43/bin/orbd 
sudo update-alternatives --remove  pack200 /home/jason/jdk1.6.0_43/bin/pack200 
sudo update-alternatives --remove  policytool /home/jason/jdk1.6.0_43/bin/policytool 
sudo update-alternatives --remove  rmic /home/jason/jdk1.6.0_43/bin/rmic 
sudo update-alternatives --remove  rmid /home/jason/jdk1.6.0_43/bin/rmid 
sudo update-alternatives --remove  rmiregistry /home/jason/jdk1.6.0_43/bin/rmiregistry 
sudo update-alternatives --remove  schemagen /home/jason/jdk1.6.0_43/bin/schemagen 
sudo update-alternatives --remove  serialver /home/jason/jdk1.6.0_43/bin/serialver 
sudo update-alternatives --remove  servertool /home/jason/jdk1.6.0_43/bin/servertool 
sudo update-alternatives --remove  tnameserv /home/jason/jdk1.6.0_43/bin/tnameserv 
sudo update-alternatives --remove  unpack200 /home/jason/jdk1.6.0_43/bin/unpack200 
sudo update-alternatives --remove  wsgen /home/jason/jdk1.6.0_43/bin/wsgen 
sudo update-alternatives --remove  wsimport /home/jason/jdk1.6.0_43/bin/wsimport 
sudo update-alternatives --remove  xjc /home/jason/jdk1.6.0_43/bin/xjc 


sudo cp profile_nojava /etc/profile
. /etc/profile
