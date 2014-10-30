package groep9.hogent.be.android.Inloggen;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 28/10/2014.
 */
public class LoginEmailActivity extends Activity {
    private final String TITLE = "Inloggen";

    private Button sendMailButton;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_email_layout);

        //Add menu fragment
        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.login_email_menu,MenuFragment.newInstance(TITLE));
        ft.commit();

        //Init views
        sendMailButton = (Button) findViewById(R.id.login_emailButton);
        sendMailButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                sendMail(view);
            }
        });
    }

    public void sendMail(View v){
        //Send mail code here

        //Return to login
        Intent intent = new Intent(this, LoginActivity.class);
        startActivity(intent);
    }
}