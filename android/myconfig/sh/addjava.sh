javapth="/home/mstarc/jdk1.7.0_10"

sudo update-alternatives --install /usr/bin/jar jar $javapth/bin/jar 5000
sudo update-alternatives --install /usr/bin/jarsigner jarsigner $javapth/bin/jarsigner 5000
sudo update-alternatives --install /usr/bin/java java $javapth/bin/java 5000
sudo update-alternatives --install /usr/bin/javac javac $javapth/bin/javac 5000
sudo update-alternatives --install /usr/bin/javadoc javadoc $javapth/bin/javadoc 5000
sudo update-alternatives --install /usr/bin/javah javah $javapth/bin/javah 5000
sudo update-alternatives --install /usr/bin/javaws javaws $javapth/bin/javaws 5000
sudo update-alternatives --install /usr/bin/javap javap $javapth/bin/javap 5000

sudo update-alternatives --install /usr/bin/appletviewer appletviewer $javapth/bin/appletviewer 5000
sudo update-alternatives --install /usr/bin/extcheck extcheck $javapth/bin/extcheck 5000
sudo update-alternatives --install /usr/bin/idlj idlj $javapth/bin/idlj 5000
sudo update-alternatives --install /usr/bin/jconsole jconsole $javapth/bin/jconsole 5000
sudo update-alternatives --install /usr/bin/jdb jdb $javapth/bin/jdb 5000
sudo update-alternatives --install /usr/bin/jhat jhat $javapth/bin/jhat 5000
sudo update-alternatives --install /usr/bin/jmap jmap $javapth/bin/jmap 5000
sudo update-alternatives --install /usr/bin/jps jps $javapth/bin/jps 5000
sudo update-alternatives --install /usr/bin/jrunscript jrunscript $javapth/bin/jrunscript 5000
sudo update-alternatives --install /usr/bin/jsadebugd jsadebugd $javapth/bin/jsadebugd 5000
sudo update-alternatives --install /usr/bin/jstack jstack $javapth/bin/jstack 5000
sudo update-alternatives --install /usr/bin/jstat jstat $javapth/bin/jstat 5000
sudo update-alternatives --install /usr/bin/jstatd jstatd $javapth/bin/jstatd 5000
sudo update-alternatives --install /usr/bin/keytool keytool $javapth/bin/keytool 5000
sudo update-alternatives --install /usr/bin/native2ascii native2ascii $javapth/bin/native2ascii 5000
sudo update-alternatives --install /usr/bin/orbd orbd $javapth/bin/orbd 5000
sudo update-alternatives --install /usr/bin/pack200 pack200 $javapth/bin/pack200 5000
sudo update-alternatives --install /usr/bin/policytool policytool $javapth/bin/policytool 5000
sudo update-alternatives --install /usr/bin/rmic rmic $javapth/bin/rmic 5000
sudo update-alternatives --install /usr/bin/rmid rmid $javapth/bin/rmid 5000
sudo update-alternatives --install /usr/bin/rmiregistry rmiregistry $javapth/bin/rmiregistry 5000
sudo update-alternatives --install /usr/bin/schemagen schemagen $javapth/bin/schemagen 5000
sudo update-alternatives --install /usr/bin/serialver serialver $javapth/bin/serialver 5000
sudo update-alternatives --install /usr/bin/servertool servertool $javapth/bin/servertool 5000
sudo update-alternatives --install /usr/bin/tnameserv tnameserv $javapth/bin/tnameserv 5000
sudo update-alternatives --install /usr/bin/unpack200 unpack200 $javapth/bin/unpack200 5000
sudo update-alternatives --install /usr/bin/wsgen wsgen $javapth/bin/wsgen 5000
sudo update-alternatives --install /usr/bin/wsimport wsimport $javapth/bin/wsimport 5000
sudo update-alternatives --install /usr/bin/xjc xjc $javapth/bin/xjc 5000


sudo cp profile_java /etc/profile
. /etc/profile
