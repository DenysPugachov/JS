// === try & catch ===
let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        //create your personeal error
        throw new Error("This data don't contain a name");
    }
} catch (error) {
    //"error" => object and can have any name
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(`We get an error: ${error.message}`);
} finally {
    console.log("I'll be working anyway");
}

console.log("I'm still working!");
