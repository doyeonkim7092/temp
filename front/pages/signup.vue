<template>
  <div>
   <v-container>
     <v-card>
       <v-subheader>회원가입</v-subheader>
       <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
         <v-text-field
           v-model="email"
           label="이메일"
           type="email"
           :rules="emailRules"
           required 
         />
         <v-text-field
         v-model="nickname"
           label="닉네임"
           type="nickname"
           :rules="nicknameRules"
           required 
         />
         <v-text-field
           v-model="password"
           label="비밀번호"
           type="password"
           :rules="passwordRules"
           required 
         />
         <v-text-field
           v-model="passwordCheck"
           label="비밀번호확인"
           type="password"
           :rules="passwordCheckRules"
           required 
         />
         <v-checkbox 
         v-model="terms"
         required 
         :rules="[v=> !!v || '약관에 동의해야 합니다.']"
         label="약관에 동의합니다"/>
         <v-btn color="green" type="submit">가입</v-btn>
       </v-form>
     </v-card>
   </v-container>
  </div>  
</template>

<script>

export default {
  data(){
    return {
      valid: false,
      email: '',
      password: '',
      nickname:'',
      passwordCheck:'',
      terms:false,
      emailRules:[
        v => !!v || 'email은 필수 입니다.',
        v => /.+@.+/.test(v) || 'email이 유효하지 않습니다'
      ],
      passwordRules:[
        v => !!v || '비밀번호는 필수 입니다.',
        
      ],
      passwordCheckRules:[
        v => !!v || '비밀번호확인은 필수 입니다.',
        v => v=== this.password || '비밀번호가 일치 하지 않습니다'
        
      ],
      nicknameRules:[
        v => !!v || '닉네임은 필수 입니다.',
        
      ],
    };
    
  },
  methods:{
    onSubmitForm(){
      if(this.$refs.form.validate()){
        alert('회원가입 시도')//API
      }
      else{
        alert('폼이 유효하지 않습니다')
        //API
      }
    }
  },
    head(){
    return {
      title: '회원가입'
    }
  }
}
</script>

<style>

</style>