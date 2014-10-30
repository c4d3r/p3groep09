package groep9.hogent.be.android.Bekijken_Activiteiten;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 30/10/2014.
 */
public class BekijkenActiviteitenActivity extends Activity {
    private final String TITLE = "Activiteiten";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.bekijken_activiteiten_layout);

        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.bekijken_activiteiten_menu, MenuFragment.newInstance(TITLE));
        ft.commit();
    }
}