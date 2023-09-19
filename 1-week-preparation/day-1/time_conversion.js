
// Question:
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    if(s.startsWith("12") == true) {
        let ending = s.slice(2);

        if (ending.endsWith("PM") == true) {
            return "12" + ending.replace("PM", "") ;
        } else {
            return "00" + ending.replace("AM", ""); 
        }
    } else {
        let ending = s.slice(2);
        let beginning = s.substr(0, 2);

        if (ending.endsWith("PM") == true) {
            beginning = parseInt(beginning);
            beginning += 12;
            beginning.toString();
            return beginning + ending.replace("PM", ""); 
        } else if (ending.endsWith("AM") == true && beginning.startsWith("0")) {
            return beginning + ending.replace("AM", ""); 
        } else {
            beginning = parseInt(beginning);
            beginning += 12;
            beginning.toString();
            return beginning + ending.replace("AM", "");
        }
    }
}

function main() {
    // Sample input:
    const s = "07:05:45PM";
    
    console.log(timeConversion(s));
    
}

main()
// Sample output:
// 19:05:45
