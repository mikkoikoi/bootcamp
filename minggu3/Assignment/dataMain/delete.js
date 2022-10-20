function delData(n) {
    try {
        if ((n == null) || (n == undefined) || (n < 0) || (n >= userData.length)) {
            throw 'Delete function argument is wrong!';
        }
        data.splice(n, 1);
        printData();
    } catch (error) {
        alert(error);
    }
    
}