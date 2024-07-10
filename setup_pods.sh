#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Navigate to the ios directory
cd ios

# Check if Podfile exists
if [ ! -f Podfile ]; then
    echo "Creating Podfile..."
    cat <<EOL > Podfile
platform :ios, '10.0'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

target 'YourApp' do
  config = use_native_modules!

  use_frameworks!

  # Pods for YourApp
  pod 'Alamofire'
  pod 'SwiftyJSON'
  pod 'RealmSwift'
  pod 'Kingfisher'
  
  # Enables Flipper.
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  use_flipper!()
  post_install do |installer|
    react_native_post_install(installer)
  end
end
EOL
else
    echo "Podfile already exists."
    echo "Updating Podfile with necessary dependencies..."

    # Add dependencies if they don't already exist in the Podfile
    grep -qxF "  pod 'Alamofire'" Podfile || sed -i "" "/use_frameworks!/a\\
      pod 'Alamofire'\\
    " Podfile
    grep -qxF "  pod 'SwiftyJSON'" Podfile || sed -i "" "/use_frameworks!/a\\
      pod 'SwiftyJSON'\\
    " Podfile
    grep -qxF "  pod 'RealmSwift'" Podfile || sed -i "" "/use_frameworks!/a\\
      pod 'RealmSwift'\\
    " Podfile
    grep -qxF "  pod 'Kingfisher'" Podfile || sed -i "" "/use_frameworks!/a\\
      pod 'Kingfisher'\\
    " Podfile
fi

# Update CocoaPods repo and install pods
echo "Updating CocoaPods repo and installing pods..."
pod install --repo-update --verbose

echo "Pod setup complete."

