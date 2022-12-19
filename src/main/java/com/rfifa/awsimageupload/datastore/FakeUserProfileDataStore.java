package com.rfifa.awsimageupload.datastore;

import com.rfifa.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("17393733-fed2-466d-a072-7a5dc750bffb"),"AntonioJr",null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("4f054c81-42ce-4c60-a4ce-a023d59ebbe6"),"Julia",null));
    }

    public List<UserProfile> getUserProfiles(){
        return USER_PROFILES;
    }
}
