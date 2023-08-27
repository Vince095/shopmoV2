// currency conversion
import AuthRepo from "~/repositories/AuthRepository";

const currency = location => {

    let data = location ;
   
    let shipping = 0;
    let exRate = 1,
        symbol = '$',
        tel = '266-5630-1591';
        
    let country = 'Nigeria';    

    for(let item in data){
        if(item === "country"){
            
           country = data[item];
        }
    }
    if (country === 'Nigeria') {
        exRate = 414.48;
        symbol = '₦'
        
        return {symbol , exRate}
    } else if (country === 'Ghana') {
        exRate = 7.51;
        symbol = '₵'
        return {symbol , exRate}

    }else if (country === 'Lesotho') {
        exRate = 17;
        symbol = 'M'
        shipping = 100;
        return {symbol , exRate , shipping}

    }else if (country === 'South Africa') {
        exRate = 16;
        symbol = 'R'
        return {symbol , exRate}
    }else {
        return {symbol , exRate}
    }   
}
export default currency