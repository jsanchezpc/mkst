document.addEventListener('DOMContentLoaded', loginJS());
function Login() {
    document.getElementById("app").innerHTML = `    
    <div id="login">
        <div class="container">
        <fieldset id="login_view">
            <img src="src/img/mkst_logo.png" alt="logo" class="logofieldview" />
            <!--login-->
            <form action="/signup" method="get">
            <label for="username-inp-log">Username</label>
            <input
                name="username"
                class="u-full-width"
                type="text"
                placeholder="superuser"
                id="username-inp-log"
            />
            <label for="password">Your password</label>
            <input
                name="pw"
                class="u-full-width"
                type="password"
                placeholder="Password"
                id="password"
            />
            <label
                for="
            rememberbox"
            >
                <input type="checkbox" name="remember" id="rememberbox" />
                Remember me
            </label>

            <p class="custom-btn" id="login-text">
                Log In
            </p>
            <a href="/restorepassword" id="restorepassword"
                >Forgot your password?</a
            >
            </form>
            <hr class="line" />
            <!--register-->
            <h3>New account</h3>
            <fieldset id="register-rules">
            <ul>
                <li>Username: 3 - 13 characters</li>
                <li>Password: 6 - 16 characters</li>
            </ul>
            </fieldset>
            <form id="registerform" method="post" onsubmit="submitRegister()">
            <label for="username-inp-reg">Your username</label>
            <input
                name="username-inp-reg"
                class="u-full-width"
                type="text"
                placeholder="Merkastock"
                id="username-inp-reg"
            />
            <label for="reg-password">Your password</label>
            <input
                name="pw"
                class="u-full-width"
                type="password"
                placeholder="Password"
                id="reg-password"
            />
            <label for="reg-password-confirm">Confirm password</label>
            <input
                class="u-full-width"
                type="password"
                placeholder="Confirm your password"
                id="reg-password-confirm"
            />
                <p class="custom-btn" id="register-text">
                CREATE ACCOUNT
                </p>
            </form>
        </fieldset>
        </div>
    </div>`;
}

function loginJS() {  
    Login();
    submitRegister();  
    //check username
    document.getElementById('username-inp-reg').addEventListener('input', function checkInputs() {
        let username = document.getElementById('username-inp-reg');
        if (username.value.length < 3 || username.value.length > 13){
            console.log('wrong username');
            return username.style.borderColor = "#e00543";
        }
        else if(username.value.length >= 3 && username.value.length <= 13){
            console.log('username looks good');
            return username.style.borderColor = "#c1ec16";
        }
    });
    //check passwd
    document.getElementById('reg-password').addEventListener('input', function checkInputs() {
        let regpassword = document.getElementById('reg-password');
        if (regpassword.value.length < 6 || regpassword.value.length > 16){
            console.log('wrong password');
            return regpassword.style.borderColor = "#e00543";
        }
        else if(regpassword.value.length >= 6 && regpassword.value.length <= 16){
            console.log('password looks good');
            return regpassword.style.borderColor = "#c1ec16";
        }
    });
    document.getElementById('reg-password-confirm').addEventListener('input', function checkInputs() {
        let regpassword = document.getElementById('reg-password-confirm');
        if (regpassword.value.length < 6 || regpassword.value.length > 16 || regpassword.value !== document.getElementById('reg-password').value){
            console.log('wrong password');
            return regpassword.style.borderColor = "#e00543";
        }
        else if(regpassword.value.length >= 6 && regpassword.value.length <= 16){
            console.log('password looks good');
            return regpassword.style.borderColor = "#c1ec16";
        }
    });
}

function submitRegister() {
    const btn = document.getElementById('create-btn');
    console.log(btn);
    btn.onsubmit = function(event) {
        console.log(event);
        e.preventDefault();
        console.log('Sending new user...')
        if(document.getElementById('reg-password').value !== document.getElementById('reg-password-confirm').value || document.getElementById('reg-password').style.borderColor && document.getElementById('username-inp-reg').style.borderColor !== "#c1ec16" ) {
            return alert('You wrote wrong your password');
        } else {
                return console.log('registering')
                //fetch('http://localhost:8080/register')
                //    .then(res)
        }
    };

}