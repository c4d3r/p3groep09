package groep9.hogent.be.android.Menu;

import android.app.Fragment;
import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import org.w3c.dom.Text;

import groep9.hogent.be.android.Bekijken_Activiteiten.BekijkenActiviteitenActivity;
import groep9.hogent.be.android.Joetz_Contacteren.JoetzContacterenActivity;
import groep9.hogent.be.android.Nieuws_Bekijken.NieuwsActivity;
import groep9.hogent.be.android.Profile.ProfileActivity;
import groep9.hogent.be.android.R;
import groep9.hogent.be.android.Settings.SettingsActivity;
import groep9.hogent.be.android.Vakantie_Weergeven.VakantieWeergevenActivity;

/**
 * Created by Dries on 28/10/2014.
 */
public class MenuFragment extends Fragment {
    private static final String TITLE = "title";

    private TextView titleView;

    private ImageView nieuwsButton;
    private ImageView vakantieButton;
    private ImageView activiteitButton;
    private ImageView contactButton;
    private ImageView profileButton;
    private ImageView settingsButton;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.menu_fragment,container,false);
        String title = getArguments().getString(TITLE);

        titleView = (TextView) root.findViewById(R.id.menu_titleText);
        nieuwsButton = (ImageView) root.findViewById(R.id.menu_newsTabImage);
        nieuwsButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                nieuwsBekijken(v);
            }
        });
        vakantieButton = (ImageView) root.findViewById(R.id.menu_vacationTabImage);
        vakantieButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                vakantieWeergeven(v);
            }
        });
        activiteitButton = (ImageView) root.findViewById(R.id.menu_activityTabImage);
        activiteitButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                activiteitWeergeven(v);
            }
        });
        contactButton = (ImageView) root.findViewById(R.id.menu_contactTabImage);
        contactButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                joetzContacteren(v);
            }
        });
        profileButton = (ImageView) root.findViewById(R.id.menu_profileImage);
        profileButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                profiel(v);
            }
        });
        settingsButton = (ImageView) root.findViewById(R.id.menu_settingsImage);
        settingsButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                settings(v);
            }
        });

        titleView.setText(title);
        return root;
    }

    public static MenuFragment newInstance(String title){
        MenuFragment f = new MenuFragment();
        Bundle args = new Bundle();
        args.putString(TITLE,title);
        f.setArguments(args);
        return f;
    }

    private void nieuwsBekijken(View v){
        if(!getActivity().getClass().equals(NieuwsActivity.class)) {
            Intent intent = new Intent(getActivity(), NieuwsActivity.class);
            getActivity().startActivity(intent);
        }
    }

    private void joetzContacteren(View v){
        if(!getActivity().getClass().equals(JoetzContacterenActivity.class)) {
            Intent intent = new Intent(getActivity(), JoetzContacterenActivity.class);
            getActivity().startActivity(intent);
        }
    }

    private void vakantieWeergeven(View v){
        if(!getActivity().getClass().equals(VakantieWeergevenActivity.class)) {
            Intent intent = new Intent(getActivity(), VakantieWeergevenActivity.class);
            getActivity().startActivity(intent);
        }
    }

    private void profiel(View v){
        if(!getActivity().getClass().equals(ProfileActivity.class)) {
            Intent intent = new Intent(getActivity(), ProfileActivity.class);
            getActivity().startActivity(intent);
        }
    }

    private void settings(View v){
        if(!getActivity().getClass().equals(SettingsActivity.class)) {
            Intent intent = new Intent(getActivity(), SettingsActivity.class);
            getActivity().startActivity(intent);
        }
    }

    private void activiteitWeergeven(View v){
        if(!getActivity().getClass().equals(NieuwsActivity.class)) {
            Intent intent = new Intent(getActivity(), BekijkenActiviteitenActivity.class);
            getActivity().startActivity(intent);
        }
    }
}