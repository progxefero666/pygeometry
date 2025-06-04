@echo off
setlocal

rem Check if a directory name was provided as a parameter
if "%~1"=="" (
    echo.
    echo ERROR: Please provide the name of the child directory to document.
    echo Usage: %~nx0 ^<directory_name^>
    echo Example: %~nx0 src
    echo.
    goto :eof
)

set "TARGET_DIR=%~1"
set "OUTPUT_FILE=folder_treecode.md"

rem Ensure the target directory exists
if not exist "%TARGET_DIR%\" (
    echo.
    echo ERROR: The specified directory "%TARGET_DIR%" does not exist.
    echo Please check the name and try again.
    echo.
    goto :eof
)

rem Clear previous content and add main heading
> "%OUTPUT_FILE%" echo # Project Folder Structure and Code

rem Add a separator for clarity
>> "%OUTPUT_FILE%" echo.
>> "%OUTPUT_FILE%" echo ---
>> "%OUTPUT_FILE%" echo.

rem Add heading for the directory tree
>> "%OUTPUT_FILE%" echo ## Directory Tree for "%TARGET_DIR%"

rem Add some blank lines before the tree for spacing
>> "%OUTPUT_FILE%" echo.
>> "%OUTPUT_FILE%" echo.

rem Generate directory tree for the target directory and append to the output file
tree "%TARGET_DIR%" /F /A >> "%OUTPUT_FILE%"

rem Add a separator after the directory tree
>> "%OUTPUT_FILE%" echo.
>> "%OUTPUT_FILE%" echo ---
>> "%OUTPUT_FILE%" echo.

rem Add heading for file contents
>> "%OUTPUT_FILE%" echo ## File Contents from "%TARGET_DIR%"

rem Add some blank lines before file contents start
>> "%OUTPUT_FILE%" echo.
>> "%OUTPUT_FILE%" echo.

rem Loop through all files within the target directory and append their content
for /R "%TARGET_DIR%" %%f in (*.*) do (
    rem Exclude node_modules and .git directories (relative to current working dir)
    echo %%f | findstr /I /C:"\node_modules\" /C:"\.git\" > nul
    if errorlevel 1 (
        rem Add a separator before each file's content
        >> "%OUTPUT_FILE%" echo ---

        rem Add file path heading (relative to current working directory)
        >> "%OUTPUT_FILE%" echo ### File: %%f

        rem Add blank line before code block
        >> "%OUTPUT_FILE%" echo.

        rem Start code block (generic language)
        >> "%OUTPUT_FILE%" echo ```
        
        rem Append file content. Using findstr /R ".*" to keep all lines including empty ones.
        rem Note: This will include binary content for certain file types, which might appear as gibberish.
        findstr /R ".*" "%%f" >> "%OUTPUT_FILE%"

        rem End code block
        >> "%OUTPUT_FILE%" echo ```

        rem Add blank line after code block
        >> "%OUTPUT_FILE%" echo.
    )
)

echo.
echo Document "%OUTPUT_FILE%" generated successfully for directory "%TARGET_DIR%"!
pause
endlocal