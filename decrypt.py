def decrypt(self, value):

        # decrypt last 16 bytes
        offset = len(value) - 16;
        end_plain = value[offset :]

        cipher = AES.new(bytes(self.key), AES.MODE_CBC, bytes(self.iv))
        end_plain = cipher.decrypt(bytes(end_plain))
        for idx,byte in enumerate(end_plain) :
            value[offset+idx] = byte

        # decrypt first 16 bytes
        start_plain = value[: 16]

        cipher = AES.new(bytes(self.key), AES.MODE_CBC, bytes(self.iv))
        # cipher.iv = bytes(iv)
        start_plain = cipher.decrypt(bytes(start_plain))
        for idx,byte in enumerate(start_plain) :
            value[idx] = byte

        return value