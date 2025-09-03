FROM rockylinux:9.3

# Update all packages and install security updates
RUN dnf -y update && \
    dnf -y upgrade --security && \
    dnf install -y httpd iproute && \
    dnf clean all && \
    rm -rf /var/cache/dnf

# Remove proxy environment variables unless needed for build
# ENV http_proxy=http://proxy.your.site.com:8080
# ENV https_proxy=http://proxy.your.site.com:8080

# Add a simple index.html
RUN echo "Hello from Rocky Linux 9.3" > /var/www/html/index.html

# Expose HTTP port
EXPOSE 80

# Run httpd in the foreground (systemctl does not work in containers)
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
