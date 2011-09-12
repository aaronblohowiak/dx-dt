#!/usr/bin/env bash


if [ -n "$DXDT_ENDPOINT"]; then
  DXDT_ENDPOINT=http://localhost:8081/;
fi

if [ -n "$DXDT_TOKEN"]; then
  DXDT_TOKEN=NO_TOKEN;
fi


for filename in *.tgz; do
  set +e

  code=`curl -F "bulk=@$filename" -F "token=$DXDT_TOKEN" -F"environment=$DXDT_ENVIRONMENT" --write-out %{http_code} --silent --output /dev/null $DXDT_ENDPOINT`;
  set -e

  echo $code

  if [ "$code" == "200" ]; then
    echo "would rm $filename";
  else
    echo "upload of file failed, will not delete.";
  fi
done

