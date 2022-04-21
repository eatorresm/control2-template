import { faker } from '@faker-js/faker'
import "../utils/constants"

exports.getUsers = () => {
    const users = []
    for (let i = 1; i <= 10000; i++) {
        users.push(getFakeUser(i))
    }
    return users
}

function getFakeUser (id) {
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
        bitcoinAddress: faker.finance.bitcoinAddress()
    }
}

export function getToken (id,KEY_tmp,SECRET_tmp){
    if(id <= 10000){
        if( KEY_tmp != KEY || SECRET_tmp != SECRET){
            return console.error();
        }
        
        else{
            token = getUUIDV4()
            return token
        }
    }
}

export function getUser(token_tmp){

    if(token_tmp == token){
        return user
    }

}
