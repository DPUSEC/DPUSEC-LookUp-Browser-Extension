all:
	make firefox
	make chrome

firefox:
	zip -r ext.xpi * -x .git -x .gitignore -x \*.xpi -x \*.zip -x \*.crx -x README.md -x icons.ai -x Makefile

chrome:
	zip -r ext.crx * -x .git -x .gitignore -x \*.xpi -x \*.zip -x \*.crx -x README.md -x icons.ai -x Makefile
