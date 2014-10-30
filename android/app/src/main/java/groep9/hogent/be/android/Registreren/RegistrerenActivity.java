package groep9.hogent.be.android.Registreren;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 30/10/2014.
 */
public class RegistrerenActivity extends Activity {
    private final String TITLE = "Registreren";

    private Button nextButton;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.registreren_layout);

        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.registreren_menu, MenuFragment.newInstance(TITLE));
        ft.commit();

        //Init views
        nextButton = (Button) findViewById(R.id.registreren_nextButton);
        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                nextView(view);
            }
        });
    }

    private void nextView(View v){
        Intent intent = new Intent(this,RegistrerenOptionalActivity.class);
        startActivity(intent);
    }
}