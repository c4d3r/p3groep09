package groep9.hogent.be.android.Inloggen;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.view.Menu;
import android.widget.TextView;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 28/10/2014.
 */
public class LoginActivity extends Activity {
    private TextView menuTitle;
    private final String TITLE = "Inloggen";

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_layout);

        menuTitle = (TextView) findViewById(R.id.menu_titleText);
        menuTitle.setText(TITLE);
    }
}