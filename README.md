# Firebase

Firebase is a service that provides data storage, user authentication, static hosting for your apps.  Data is stored as JSON objects, and users are updated in real time when data changes or is added.  

Firebase has a couple of short and easy tutorials on their site for making messaging apps and trying out the service, one for vanilla Firebase-

https://www.firebase.com/tutorial/#gettingstarted

and one for AngularFire (Firebase with Angular)-

https://www.firebase.com/tutorial/#tutorial/angular/0

They'll show you the basics for getting started.  (For ease, the tutorials put all of the JS in the HTML, so for a real app you probably want to put it in its own file for separation of concerns issues.)  There are several other good sample projects on the firebase website, like Tetris!

https://www.firebase.com/tutorial/#session/xy1706rxz1z

To use Firebase in your app, you can include this in your HTML-
<script src="https://cdn.firebase.com/js/client/2.3.1/firebase.js"></script>
or
$ npm install firebase --save

Likewise for AngularFire use-
<script src="https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js"></script>
or
$ npm install angularfire --save

Here are some helpful links-
Firebase site-
https://www.firebase.com/

Firebase documentation-
https://www.firebase.com/docs/web/

AngularFire GitHub-
https://github.com/firebase/angularFire

AngularFire API-
https://www.firebase.com/docs/web/libraries/angular/api.html