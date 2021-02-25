set -euo pipefail

CURR_DIR="$(pwd)"
TMP_DIR=$(mktemp -d)

make report

cd $TMP_DIR
echo "Using temp directory: $TMP_DIR"
git clone https://github.com/jxc454/servehistogram.git
cd servehistogram
#git branch -D gh-pages || echo "gh-pages branch doesn't exist!"
git checkout gh-pages

#git rm --cached -r .
cp -r $CURR_DIR/reports .

git add reports/*
git commit -m "Test Report $(date)"
#git push origin :gh-pages
git push origin gh-pages

cd $CURR_DIR
rm -rf "$TMP_DIR"
