for i in `find artifacts/contracts -type f -name '*.json' ! -name '*.dbg.json'` ; do cp -r $i artifacts/abis/ ; done
# đoạn mã này tìm kiếm tát cả các tệp tin có đuôi .json trong thư mục artifacts/contracts, loại trừ 
# các tệp tin có đuôi .dbg.json, sau đó sao chép từng tệp tin vào thư mục artifacts/abis/