# [Assignment:](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md) CLI File Manager

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```

List of operations and their syntax:
- Navigation & working directory (nwd)
    - Go upper from current directory:
    ```bash
    up
    ```
    - Go to dedicated folder from current directory:
    ```bash
    cd path_to_directory
    ```
    - Print in console list of all files and folders in current directory:
    ```bash
    ls
    ``` 
- Basic operations with files
    - Read file and print it's content in console: 
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory: 
    ```bash
    add new_file_name
    ```
    - Rename file: 
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file: 
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file: 
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file: 
    ```bash
    rm path_to_file
    ```
- Operating system info:
    - Get EOL (default system End-Of-Line)  
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info  
    ```bash
    os --cpus
    ```
    - Get home directory 
    ```bash
    os --homedir
    ```
    - Get current *system user name*  
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled 
    ```bash
    os --architecture
    ```
- Hash calculation  
    - Calculate hash for file 
    ```bash
    hash path_to_file
    ```
- Compress and decompress operations  
    - Compress file (using Brotli algorithm)  
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file (using Brotli algorithm)  
    ```bash
    decompress path_to_file path_to_destination
    ```  

**Note**: replace `npm` with `yarn` if you use yarn.
