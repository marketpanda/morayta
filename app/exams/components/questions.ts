 
  
const getQuestions = async() => { 
    const response = await fetch ('/api')
    const data =  await response.json()
    // return JSON.stringify(data)

    await new Promise(resolve => setTimeout(resolve, 1000))
    return data
}

export default getQuestions