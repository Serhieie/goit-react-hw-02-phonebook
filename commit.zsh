commit_message="$1"
git add .
git commit -m "$commit_message"
git push
echo "Commit was created: $commit_message"

