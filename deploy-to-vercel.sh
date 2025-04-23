#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  
  # Create a .vercel directory if it doesn't exist
  mkdir -p .vercel
  
  # Create a project.json file with the correct settings
  echo '{
    "projectId": "prj_your_project_id",
    "orgId": "your_org_id",
    "settings": {
      "framework": "vite",
      "buildCommand": "npm run build",
      "outputDirectory": "dist",
      "devCommand": "npm run dev"
    }
  }' > .vercel/project.json
  
  # Deploy to Vercel
  echo "Deploying to Vercel..."
  npx vercel deploy --prebuilt --prod
  
  echo "Deployment complete! Check the URL above to view your site."
else
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi
