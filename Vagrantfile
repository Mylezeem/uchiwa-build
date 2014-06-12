# -*- mode: ruby -*-
# vi: set ft=ruby :

if ENV['UCHIWA_VERSION'].nil?
  raise "Must set env var 'UCHIWA_VERSION'"
end

if ENV['BUILD_NUMBER'].nil?
  raise "Must set env var 'BUILD_NUMBER'"
end

opscode_bento = 'http://opscode-vm-bento.s3.amazonaws.com/vagrant/virtualbox'
build_boxes = {
  :centos_5_32    => "#{opscode_bento}/opscode_centos-5.10-i386_chef-provisionerless.box",
  :centos_5_64    => "#{opscode_bento}/opscode_centos-5.10_chef-provisionerless.box",
  :ubuntu_1204_32 => "#{opscode_bento}/opscode_ubuntu-12.04-i386_chef-provisionerless.box",
  :ubuntu_1204_64 => "#{opscode_bento}/opscode_ubuntu-12.04_chef-provisionerless.box",
}

Vagrant.configure("2") do |config|
  config.vm.provider 'virtualbox' do |vm|
    vm.memory = 750
    vm.cpus = 1
  end
  config.vm.provision 'shell', :path => 'install_dependencies.sh'
  config.vm.provision "shell",
    :inline => "/bin/bash --login -c ' \
                export VAGRANT_BOX=true ; \
                export UCHIWA_VERSION=#{ENV['UCHIWA_VERSION']} ; \
                export BUILD_NUMBER=#{ENV['BUILD_NUMBER']} ; \
                cd /vagrant && ./build.sh && shutdown -h now'"
  build_boxes.each do |name, url|
    config.vm.define name do |build_box|
      build_box.vm.box = name.to_s
      build_box.vm.box_url = url
    end
  end
end
