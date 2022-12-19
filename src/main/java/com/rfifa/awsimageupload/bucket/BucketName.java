package com.rfifa.awsimageupload.bucket;

public enum BucketName {

    PROFILE_IMAGE("awsreactapprfifa");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
