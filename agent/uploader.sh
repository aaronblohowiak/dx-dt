#!/usr/bin/env bash


if [ -n "$DXDT_ENDPOINT"]; then
  DXDT_ENDPOINT=http://localhost:8081/;
fi

for filename in *.tgz; do
  set +e

  code=`curl -F "bulk=@$filename" -F "token=$DXDT_TOKEN&environment=$DXDT_ENVIRONMENT" --write-out %{http_code} --silent --output /dev/null $DXDT_ENDPOINT`;
  set -e

  echo $code

  if [ "$code" == "200" ]; then
    echo "would delete" $filename;
  else
    echo "would not delete it";
  fi
  exit
done

