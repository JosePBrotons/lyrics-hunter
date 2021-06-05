rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang/ModuleCache"
rm -rf ios/build/ModuleCache
rm -rf ios/build

echo "Clean iOS Successfully"