package groep9.hogent.be.android.Inloggen;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.Nieuws_Bekijken.NieuwsActivity;
import groep9.hogent.be.android.R;
import groep9.hogent.be.android.Registreren.RegistrerenActivity;

/**
 * Created by Dries on 28/10/2014.
 */
public class LoginActivity extends Activity {
    private final String TITLE = "Inloggen";

    private Button loginButton;
    private Button registrerenButton;

    private TextView forgotPasswordText;

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_layout);

        //Add menu
        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.login_menu,MenuFragment.newInstance(TITLE));
        ft.commit();

        //Init views
        loginButton = (Button) findViewById(R.id.login_loginButton);
        loginButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                login(v);
            }
        });

        registrerenButton = (Button) findViewById(R.id.login_registreerButton);
        registrerenButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                registreren(v);
            }
        });

        forgotPasswordText = (TextView) findViewById(R.id.login_forgotEmailText);
        forgotPasswordText.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                forgotPassword(v);
            }
        });
    }

    private void login(View v){
        //Login code here

        //Proceed to news activity
        Intent intent = new Intent(this, NieuwsActivity.class);
        startActivity(intent);
    }

    private void registreren(View v){
        //Register code here

        //Proceed to register activity
        Intent intent = new Intent(this, RegistrerenActivity.class);
        startActivity(intent);
    }

    private void forgotPassword(View v){
        //Proceed to forgot password activity
        Intent intent = new Intent(this, LoginEmailActivity.class);
        startActivity(intent);
    }
}