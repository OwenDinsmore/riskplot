#!/bin/bash

# Deploy RiskPlot to PyPI
# Usage: ./scripts/deploy_to_pypi.sh [test|prod]

set -e

ENVIRONMENT=${1:-test}

echo "🚀 Deploying RiskPlot to PyPI ($ENVIRONMENT)"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf build/
rm -rf dist/
rm -rf *.egg-info/

# Install build dependencies
echo "📦 Installing build dependencies..."
python -m pip install --upgrade pip
python -m pip install --upgrade build twine

# Build the package
echo "🔨 Building package..."
python -m build

# Check the distribution
echo "🔍 Checking distribution..."
python -m twine check dist/*

if [ "$ENVIRONMENT" = "test" ]; then
    echo "📤 Uploading to Test PyPI..."
    python -m twine upload --repository testpypi dist/*
    echo "✅ Package uploaded to Test PyPI!"
    echo "🔗 View at: https://test.pypi.org/project/riskplot/"
    echo "📥 Install with: pip install -i https://test.pypi.org/simple/ riskplot"
elif [ "$ENVIRONMENT" = "prod" ]; then
    echo "📤 Uploading to Production PyPI..."
    read -p "Are you sure you want to upload to PRODUCTION PyPI? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        python -m twine upload dist/*
        echo "✅ Package uploaded to Production PyPI!"
        echo "🔗 View at: https://pypi.org/project/riskplot/"
        echo "📥 Install with: pip install riskplot"
    else
        echo "❌ Upload cancelled"
        exit 1
    fi
else
    echo "❌ Invalid environment. Use 'test' or 'prod'"
    exit 1
fi

echo "🎉 Deployment complete!"