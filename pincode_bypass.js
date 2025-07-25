java.perform(function(){
    console.log("\n*** Pincode Bypass with Frida ***");
    var UserAuthSave =Java.use("com.BugBazaar.controller.UserAuthSave");
    console.log("\nHijacking getpasscode() function in class UserAuthSave");
    UserAuthSave.getpasscode.implementation = function(){
        console.log("\nInside the getpasscode() function");
        return"1234";
    };
    console.log("\nPincode Bypass Hooked!");
});