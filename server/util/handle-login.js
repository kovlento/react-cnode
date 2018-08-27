const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'http://cnodejs.org/api/v1'

router.post('/login', function(req, res){
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accessToken
  })
    .then(resp => {
      if(resp.status === 200 && resp.data.sussess){
        req.session.user = {
          accessToken: req.body.accessToken,
          loginName: resp.data.loginname,
          id: resp.data.id,
          avatarUrl: resp.data.avatar_url
        }
        res.join({
          success: true,
          data: resp.data
        })
      }
    })
    .catch(err => {
      if(err.response) {
        res.join({
          success: false,
          data: err.response
        })
      }else{
        next(err)
      }
    })
})

module.exports = router
