echo "添加GCC4.4，系统自带GCC"
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.4 40
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.4 40
sudo update-alternatives --install /usr/bin/gcov gcov /usr/bin/gcov-4.4 40
