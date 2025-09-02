@echo off 
cmd /c call "D:\playwright\daraz_1\tests\daraz.spec.js@tmp\durable-5c8a6270\jenkins-main.bat" > "D:\playwright\daraz_1\tests\daraz.spec.js@tmp\durable-5c8a6270\jenkins-log.txt" 2>&1
echo %ERRORLEVEL% > "D:\playwright\daraz_1\tests\daraz.spec.js@tmp\durable-5c8a6270\jenkins-result.txt"
