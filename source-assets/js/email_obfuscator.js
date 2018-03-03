/**
 * Simple email obfuscator
 * 
 * @author Maciej Lew maciej.lew.1987@gmail.com
 * @license MIT License
 */

onload=function(){
    if (document.getElementsByClassName === undefined) {
        document.getElementsByClassName = function(className)
        {
            var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
            var allElements = document.getElementsByTagName("*");
            var results = [];

            var element;
            for (var i = 0; (element = allElements[i]) !== null; i++) {
                var elementClass = element.className;
                if (elementClass && elementClass.indexOf(className) !== -1 && hasClassName.test(elementClass))
                    results.push(element);
            }

            return results;
        };
    }
};

var emails = document.getElementsByClassName("email");
for ( i = 0 ; i < emails.length ; i++ ) {
    var email = emails[i].innerHTML;
    email = email.replace(" [at] ", "&#64;");
    emails[i].innerHTML = "<a href=\"mailto:" + email + "\">" + email + "</a>";
}