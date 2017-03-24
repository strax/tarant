package com.example.joona.myapplication;

import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if (requestCode == 200) {
            if (grantResults[0] != PackageManager.PERMISSION_GRANTED) {
                System.out.println("No perms! " + Arrays.toString(grantResults));
                return;
            }

            saveTarantToSdcard();
            Bitmap bitmap = loadTarantFromSdcard();
            if (bitmap == null) {
                System.out.println("Bitmap doesn't exist");
            }
            blur(bitmap);
            setImageViewImage(bitmap);
        }
    }

    public void tarant(View view) {
        requestPermissions(new String[] {
                "android.permission.WRITE_EXTERNAL_STORAGE",
                "android.permission.READ_EXTERNAL_STORAGE"
        }, 200);
    }

    private Bitmap loadTarantFromSdcard() {
        String extStorageDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES).getAbsolutePath();
        return BitmapFactory.decodeFile(new File(extStorageDir, "test.jpg").getAbsolutePath());
    }

    private void blur(Bitmap bitmap) {

    }

    private void saveTarantToSdcard() {
        Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.drawable.test);
        String extStorageDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES).getAbsolutePath();

        File outFile = new File(extStorageDir, "test.jpg");
        try (FileOutputStream outStream = new FileOutputStream(outFile)) {
            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, outStream);
        } catch (IOException ex) {
            System.out.println("fail");
            ex.printStackTrace();
        }
    }

    private void setImageViewImage(Bitmap bitmap) {
        ImageView view = (ImageView) findViewById(R.id.imageView);
        view.setImageBitmap(bitmap);
    }
}
