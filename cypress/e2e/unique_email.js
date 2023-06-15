 export function generateUniqueEmail() {
    var timestamp = Date.now();
    var randomString = Math.random().toString(36).substring(2, 10);
    var email = "unique" + timestamp + "_" + randomString + "@danpheit.com";
    
    return email;
  }
  