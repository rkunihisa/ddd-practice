FROM rockylinux:9.3

# Update all packages to the latest version to reduce vulnerabilities
RUN dnf -y update && dnf clean all

ENV http_proxy=http://proxy.your.site.com:8080
ENV https_proxy=http://proxy.your.site.com:8080

RUN dnf install -y httpd iproute && yum clean all
RUN echo "Hello from Rocky Linux 9.3" > /var/www/html/index.html
RUN systemctl enable httpd
