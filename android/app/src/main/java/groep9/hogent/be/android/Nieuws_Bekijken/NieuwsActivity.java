package groep9.hogent.be.android.Nieuws_Bekijken;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 29/10/2014.
 */
public class NieuwsActivity extends Activity {
    private final String TITLE = "Nieuws";

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.nieuws_layout);

        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.nieuws_menu, MenuFragment.newInstance(TITLE));
        ft.commit();
    }
}