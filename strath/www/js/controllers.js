angular.module('starter.controllers',[])

.controller('AppCtrl',function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory){
    var url="";

    $scope.loginData={};

    $scope.doLogin=function(){
      var stud_no=$scope.loginData.username;
      var password=$scope.loginData.password;

      if(admin_user && admin_password){
          str=url+"login.php?username="+stud_no+"&password="+password;
          $http.get(str)
            .success(function(response){

                $scope.admin=response.records;
                sessionStorage.setItem('loggedin_status',true);
                sessionStorage.setItem('loggedin_id',$scope.admin.stud_no);
                sessionStorage.setItem('loggedin_status',$scope.admin.stud_no);

                $ionicHistory.nextViewOptions({
                  disableAnimate:true,
                  disableBack:true
                })

                $ionicPopup.alert({
                  title:'Success',
                  template:'Welcome!!'
                })

                $state.go('tab.main',{},{location:"replace",reload:true});
            })
            .error(function(){

              $ionicPopup.alert({
                  title:'Login Error',
                  template:'Wrong password/Username'
              })
            });

      }else{
        $ionicPopup.alert({
          title:'Warning!',
          template:'Input all the fields'
        })

      }

    }



    $scope.doLogout=function(){

      sessionStorage.removeItem('loggedin_status');
      sessionStorage.removeItem('loggedin_id');
      sessionStorage.removeItem('loggedin_status');

      $ionicHistory.nextViewOptions({
        disableAnimate:true,
        disableBack:true
      })

      $ionicPopup.alert({
        title:'Success',
        template:'Logged out successfully'
      })

      $state.go('tab.login',{},{location:"replace",reload:true});


    }












})
