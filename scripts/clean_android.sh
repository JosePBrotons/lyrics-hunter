rm -rf android/app/src/main/res/drawable-mdpi/
rm -rf android/app/src/main/res/drawable-xhdpi/
rm -rf android/app/src/main/res/drawable-xxhdpi/
rm -rf android/app/src/main/res/drawable-xxxhdpi/
rm -rf android/app/build
rm -rf android/tmp
rm -rf tmp
cd ./android && ./gradlew clean && cd ..