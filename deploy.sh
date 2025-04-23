#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  
  # Deploy to Vercel
  echo "Deploying to Vercel..."
  npx vercel --confirm
  
  echo "Deployment complete! Check the URL above to view your site."
  echo "To deploy to production, run: npm run deploy:prod"
else
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi
